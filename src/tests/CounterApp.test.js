import React from 'react';
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    test('debe mostrar <CounterApp /> correctamente', () => {
        
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const value = 100;
        const wrapper = shallow(<CounterApp value={ value } />);

        const contador = wrapper.find('h2').text()*1;

        console.log(contador)

        expect(contador).toBe(101);

    })
    
})
 


