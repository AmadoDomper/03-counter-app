import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => { 
    test('debe de retornar un héroe por id', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroeData).toEqual(heroeData);

     })

    test('debe de retornar un undefined si héroe no existe', () => { 
        
        const id = 15;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

     })

     test('debe de retornar un arreglo con los héroes de DC', () => { 
        
        const owner = "DC";
        const heroe = getHeroesByOwner(owner);

        const heroeOwner = heroes.filter( h => h.owner === owner);

        expect(heroe).toEqual(heroeOwner);

     })

     test('debe de retornar un arreglo con los héroes de Marvel', () => { 
        
        const owner = "Marvel";
        const heroe = getHeroesByOwner(owner);

        // const heroeOwner = heroes.filter( h => h.owner === owner);

        expect(heroe.length).toBe(2);

     })
    
    
 })