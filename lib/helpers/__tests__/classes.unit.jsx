import classes from '../classes';

describe('classes', () => {
  it('接受1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  })
  it('接受2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  })
  it('接受undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  })
  it('接受中文', () => {
    const result = classes('a', '你好中文');
    expect(result).toEqual('a 你好中文');
  })
  it('接受0个参数', () => {
    const result = classes();
    expect(result).toEqual('');
  })
})