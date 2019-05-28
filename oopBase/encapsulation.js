/**
 * encapsulation 封装
 *
 * 私有属性
 * 私有方法
 * 特权方法
 * 共有属性
 * 共有方法
 */

function Book (name, author, type, price) {

  let pageSize = 800;

  this.name = name;
  this.author = author;
  this.tyoe = type;
  this.price = price;
}

Book.prototype = {
  getBookInfo: function() {
    let info =  `这是${this.author}写的${this.name}`;
    console.log(info);
  }
}

let book = new Book('时间简史', '霍金');
book.getBookInfo();

console.log(book.__proto__ === Book.prototype);


// 使用闭包实现
var Phone = function() {

  // 先定义静态私有属性，方法
  var id = 0x001;

  function setId(phone) {

  }

  // 返回构造函数
  return function(phone, price, size, name) {

  }
}()
