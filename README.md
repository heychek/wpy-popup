### Popup 组件的使用

> 说明：npm 版本需要 6.1 以上

### 一、安装

```
npm install wpy-popup --save
```

### 二、引用

```
import Popup from 'wpy-popup';
```

### 三、声明组件

```
// 声明组件，分配组件id
components = {
    Popup: Popup
}
```

### 四、页面使用

> 将弹窗中的内容放到`<Popup></Popup>`标签中即可

Popup 支持传入三个属性 isShow，isOverlayShow（蒙层是否显示） 和 type。
type 表示内容从哪个方向出现，可选 center top bottom left right

```
<Popup :isShow.sync="isShow" :isOverlayShow.sync="showOverlay" :type.sync="type">
    <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
        test content
    </view>
</Popup>
```

### 五、js 获取点击事件

> 如需获取用户点击蒙层部分事件（有时需要支持用户点击蒙层部分弹窗消失）。则需要在调用时添加`@hide.user="方法名"`，然后在 js 的 method 方法中定义该方法即可

```
<Popup :isShow.sync="isShow" :isOverlayShow.sync="showOverlay" :type.sync="type" @hide.user="hidePop">
    <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
        test content
    </view>
</Popup>
// js
method = {
    hidePop() {
        // 用户点击蒙层，此方法将被触发
    }
}
```

### 六、完整使用示例如下

```
<template>
    <view>
        <Popup :isShow.sync="isShow" :isOverlayShow.sync="showOverlay" :type.sync="type" @hide.user="hidePop">
            <view style="background-color: #fff; width: 500rpx; height: 500rpx;">
                test content
            </view>
        </Popup>
    </view>
</template>

<script>
    import wepy from 'wepy';
    // js 中引入组件文件
    import Popup from 'my-wpy-pop';

    export default class Index extends wepy.component {
        // 声明组件，分配组件id
        components = {
            Popup: Popup
        }

        method = {
            hidePop() {
                // 用户点击蒙层，此方法将被触发
            }
        }
    }
</script>
```
