import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navigationitems from './Navigationitems';
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Navigationitems />)
    })

    it('should render two <NavigationItem> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })   
    
    it('should render three <NavigationItem> elements if authenticated', () => {
        wrapper.setProps({isAuth: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    }) 

    it('should render three <NavigationItem> elements if authenticated', () => {
        wrapper.setProps({isAuth: true})   
        expect(wrapper.contains(<NavigationItem link='/logout'>LogOut</NavigationItem>)).toEqual(true)
    }) 
})