import Enzyme, { shallow } from 'enzyme';
import Header from '../Header/Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})


describe('Header component', () =>{
    it('has an h1 tag', () =>{
        const component = shallow(<Header/>);
        let node = component.find('h1');
        expect(node.length).toEqual(1);
    })
    
})