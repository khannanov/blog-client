import expect from 'expect';
import { shallow } from 'enzyme';
import ArticleList from './ArticleList';

describe('<ArticleList/>', () => {
    it('should render', () => {
        expect(shallow(<ArticleList/>)).toEqual(1);
    });
});