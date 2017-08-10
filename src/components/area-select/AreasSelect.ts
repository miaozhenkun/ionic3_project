import {PickerController} from "ionic-angular";
import {Component, EventEmitter, Output, Input} from "@angular/core";
import {areasList} from "../../providers/areas";

@Component({
  selector: 'areas-select',
  templateUrl: 'areasSelect.com.html',
})
export class AreasSelect {
  constructor(protected Picker: PickerController) {
  }
  private picker;
  private provinceCol = 0; // 省列
  private cityCol = 0; // 市列
  private regionCol = 0; // 区列
  private pickerColumnCmps; // picker纵列数据实例
  private isOpen = false; // 是否被创建
  private pickerCmp; // picker 实例
  private value = ''; // 选中后的数据
  @Input() citiesData = areasList;　// 地区数据(默认为areas.ts的数据)
  @Input() cancelText = '关闭'; // 关闭按钮文本
  @Input() doneText = '完成'; // 完成按钮文本
  @Input() separator = ''; // 数据衔接模式
  @Input() level = 3; // 等级设置 最高为三级
  /**
   * 关闭时触发的事件
   * 没有值返回
   * @type {EventEmitter}
   */
  @Output() cancel: EventEmitter<any> = new EventEmitter(); // 关闭事件
  /**
   * 完成时触发的事件
   * 返回值为obj
   * obj = {data: object,value: string} data为对应的省市区和编码
   * @type {EventEmitter}
   */
  @Output() done: EventEmitter<any> = new EventEmitter(); // 完成事件
  /**
   * 打开地区选择器
   * 基本思路
   * 1.创建picker
   * 2. 先把数据处理成省市区分开的数组
   * 3. 将数据以列的形式给到picker
   * 4. 设置数据显示样式（picker）
   * 5. 生成picker
   */
  private open() {
    let pickerOptions = {
      buttons: [
        {
          text: this.cancelText,
          role: 'cancel',
          handler:() => {
            this.cancel.emit(null);
          }
        },
        {
          text: this.doneText,
          handler: (data) =>{
            this.onChange(data);
            this.done.emit({
              data: data,
              value: this.value
            });
          }
        }
      ]
    };
    this.picker = this.Picker.create(pickerOptions);
    this.generate();// 加载
    this.validate(this.picker); // 渲染
    this.picker.ionChange.subscribe(() => {
      this.validate(this.picker);
    });
    // 生成
    this.picker.present(pickerOptions).then(() => {
      this.pickerCmp = this.picker.instance;
      this.pickerColumnCmps = this.pickerCmp._cols.toArray();
      this.pickerColumnCmps.forEach(function (col) {
        return col.lastIndex = -1;
      });
    });
    this.isOpen = true;
    this.picker.onDidDismiss(function () {
      this.isOpen = false;
    });
  }

  /** 对数据进行处理，并移交给picker
   *
   */
  private generate() {
    let values = this.value.toString().split(this.separator);
    // Add province data to picker
    let provinceCol = {
      name: 'province',
      options: this.citiesData.map(function (province) {
        return {text: province.name, value: province.code, disabled: false};
      }),
      selectedIndex: 0
    };
    let provinceIndex = this.citiesData.findIndex(function (option) {
      return option.name == values[0];
    });
    provinceIndex = provinceIndex === -1 ? 0 : provinceIndex;
    provinceCol.selectedIndex = provinceIndex;
    this.picker.addColumn(provinceCol);
    // Add city data to picker
    let cityColData = this.citiesData[provinceCol.selectedIndex].children;
    let cityCol;

    if (this.level >= 2) {
      cityCol = {
        name: 'city',
        options: cityColData.map(function (city) {
          return {text: city.name, value: city.code, disabled: false};
        }),
        selectedIndex: 0
      };
      let cityIndex = cityColData.findIndex(function (option) {
        return option.name == values[1];
      });
      cityIndex = cityIndex === -1 ? 0 : cityIndex;
      cityCol.selectedIndex = cityIndex;
      this.picker.addColumn(cityCol);
    }
    // Add region data to picker
    let regionData, regionCol;

    if (this.level === 3) {
      regionData = this.citiesData[provinceCol.selectedIndex].children[cityCol.selectedIndex].children;
      regionCol = {
        name: 'region',
        options: regionData.map(function (city) {
          return {text: city.name, value: city.code, disabled: false};
        }),
        selectedIndex: 0
      };
      let regionIndex = regionData.findIndex(function (option) {
        return option.name == values[2];
      });
      regionIndex = regionIndex === -1 ? 0 : regionIndex;
      regionCol.selectedIndex = regionIndex;
      this.picker.addColumn(regionCol);
    }
    this.divyColumns(this.picker);
  }

  /**设置数据显示样式
   * @param picker
   */
  private divyColumns(picker) {
    let pickerColumns = this.picker.getColumns(); // 获取列数据
    let columns = [];
    pickerColumns.forEach(function (col, i) {
      columns.push(0);
      col.options.forEach(function (opt) {
        if (opt && opt.text && opt.text.length > columns[i]) {
          columns[i] = opt.text.length;
        }
      });
    });
    if (columns.length === 2) {
      let width = Math.max(columns[0], columns[1]);
      pickerColumns[0].align = 'right';
      pickerColumns[1].align = 'left';
      pickerColumns[0].optionsWidth = pickerColumns[1].optionsWidth = width * 17 + "px";
    }
    else if (columns.length === 3) {
      let width = Math.max(columns[0], columns[2]);
      pickerColumns[0].align = 'right';
      pickerColumns[1].columnWidth = columns[1] * 33 + "px";
      pickerColumns[0].optionsWidth = pickerColumns[2].optionsWidth = width * 17 + "px";
      pickerColumns[2].align = 'left';
    }
  }

  /**
   * 验证数据
   * @param picker
   */
  private validate(picker) {
    let _this = this;
    let columns = picker.getColumns();
    let provinceCol = columns[0];
    let cityCol = columns[1];
    let regionCol = columns[2];
    if (cityCol && this.provinceCol != provinceCol.selectedIndex) {
      cityCol.selectedIndex = 0;
      let cityColData = this.citiesData[provinceCol.selectedIndex].children;
      cityCol.options = cityColData.map(function (city) {
        return {text: city.name, value: city.code, disabled: false};
      });
      if (this.pickerColumnCmps && cityCol.options.length > 0) {
        setTimeout(function () {
          return _this.pickerColumnCmps[1].setSelected(0, 100);
        }, 0);
      }
    }
    if (regionCol && (this.cityCol != cityCol.selectedIndex || this.provinceCol != provinceCol.selectedIndex)) {
      let regionData = this.citiesData[provinceCol.selectedIndex].children[cityCol.selectedIndex].children;
      regionCol.selectedIndex = 0;
      regionCol.options = regionData.map(function (city) {
        return {text: city.name, value: city.code, disabled: false};
      });
      if (this.pickerColumnCmps && regionCol.options.length > 0) {
        setTimeout(function () {
          return _this.pickerColumnCmps[2].setSelected(0, 100);
        }, 0);
      }
    }
    this.provinceCol = provinceCol.selectedIndex;
    this.cityCol = cityCol ? cityCol.selectedIndex : 0;
    this.regionCol = regionCol ? regionCol.selectedIndex : 0;
  }

  /**
   * 设置value
   * @param newData
   */
  private setValue(newData) {
    if (newData === null || newData === undefined) {
      this.value = '';
    }
    else {
      this.value = newData;
    }
  }

  /**
   * 获取value值
   * @returns {string}
   */
  private getValue() {
    return this.value;
  }

  /**
   * 改变value值的显示
   * @param val
   */
  private onChange(val) {
    this.setValue(this.getString(val));
  }

  /**
   * 获取当前选择的地区数据
   * @param newData
   * @returns {string}
   */
  private getString(newData) {
    if (newData['city']) {
      if (newData['region']) {
        return "" + newData['province'].text + this.separator + (newData['city'].text || '') + this.separator + (newData['region'].text || '');
      }
      return "" + newData['province'].text + this.separator + (newData['city'].text || '');
    }
    return "" + newData['province'].text;
  }
}
