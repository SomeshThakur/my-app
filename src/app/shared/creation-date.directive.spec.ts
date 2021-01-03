import { CreationDateDirective } from './creation-date.directive';

describe('CreationDateDirective', () => {
  it('should create an instance', () => {
    const directive = new CreationDateDirective({ nativeElement: {} });
    expect(directive).toBeTruthy();
  });
});
