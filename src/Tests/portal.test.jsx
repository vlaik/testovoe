import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherInfoMe from '../Home/WeatherInfo/WeatherInfo';

Enzyme.configure({adapter: new Adapter()})


describe('PortalVideo component', () =>{
    it('push false component', () =>{
        const component = shallow(<WeatherInfoMe/>)
        let node = component.find('div')
        expect(node.length).toEqual(1)
    })


})