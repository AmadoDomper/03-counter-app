import React from 'react';
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value } />);

        const contador = wrapper.find('h2').text()*1;

        // console.log(contador)

        expect(contador).toBe(100);

    })

    test('debe de incrementar con el botón +1 ', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');

    })

    test('debe de decrementar con el botón -1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('9');

    })

    test('debe de establecer el valor por defecto con el btn reset', () => {

        const wrapper = shallow(<CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('105');

    })

    
})
 


