import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  });
});

describe('index.html', () => {
  it('should say this is a demo', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new jsdom.JSDOM(index)
    expect(dom.window.document.querySelector("h1").textContent).to.equal('This is a demo!')
  });
});
