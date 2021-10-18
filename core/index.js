import { Compile } from "../compiler/index.js";
import { observe } from "./observer/index.js";

export class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
      
    // 对data选项做响应式处理
    observe(this.$data);
      
    // 代理data到vm上
    // proxy(this);
      
    // 执行编译
    new Compile(options.el, this);
  }
}
