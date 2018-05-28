import wepy from 'wepy';

export default class Taping extends wepy.component {
  props = {
    isShow: {
      type: Boolean,
      value: false
    },
    // 遮罩层是否会显示
    isOverlayShow: {
      type: Boolean,
      value: true
    },
    // 内容从哪个方向出，可选 center top bottom left right
    type: {
      type: String,
      value: 'center'
    }
  }

  methods = {
    hide() {
      this.$emit('hide')
    }
  }

  onLoad() {
    if (typeof (this.isShow) === 'undefined') {
      this.isShow = true;
    }
    if (typeof (this.isOverlayShow) === 'undefined') {
      this.isOverlayShow = true;
    }
    if (typeof (this.type) === 'undefined') {
      this.type = 'center';
    }
  }
}