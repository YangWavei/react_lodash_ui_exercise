# 文字颜色渐变流光效果

思路：文字颜色填充为透明、背景裁剪让文字使用背景色、然后设置一个渐变背景色，再放大一下背景，最后通过动画移动背景位置实现最终效果。

Q1：CSS 中 `background` 属性的简写形式遵循如下顺序

1. background-color
1. background-image
1. background-repeat
1. background-attachment
1. background-position
1. background-size (注意尺寸前需要斜杠)
1. background-clip

示例：  background: [color] url('/public/favicon.png') no-repeat fixed top left / 100% text;

