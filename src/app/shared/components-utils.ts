export class ComponentUtil {
  static componentId(len = 10) {
    const ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let s = '';
    for (let i = 0; i < len; i++) {
      s += ch[Math.floor(Math.random() * ch.length)];
    }
    return s;
  }
}
