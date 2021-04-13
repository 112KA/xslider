import XSlider from '../dist/xslider.esm';

test('exist stage instance', () => {
  expect(XSlider.stage).not.toBeUndefined();
});

//TODO: 1ページに2つ以上のインスタンスでも問題ないか

//TODO: button, pager要素がなくても問題ないか
