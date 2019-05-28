/**
 *  面向对象--对象
 *
 *  创建对象的时候应该要有OOP的思想，并且配合 prototype 属性
 */

let CheckFormField = function(checkObj) {
  this.name = checkObj.name;
  this.phoneNumber = checkObj.phoneNumber;
}

CheckFormField.prototype = {
  checkName: function() {
    if(this.name.length === 0){
      console.log('不能为空');
    }
    return this;
  },
  checkPhoneNumber: function() {
    if(!(/^1[34578]\d{9}$/.test(this.phoneNumber))){
      console.log('手机号格式错误');
    }
    return this;
  }
}


let checkedObj = {
  name: '',
  phoneNumber: '123'
}

let a = new CheckFormField(checkedObj);

a.checkName().checkPhoneNumber();
