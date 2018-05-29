import wepy from 'wepy';

export default class Taping extends wepy.component {
  props = {
    isShow: {
      type: Boolean,
      value: false
    },
    isOverlayShow: {
      type: Boolean,
      value: true
    },
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