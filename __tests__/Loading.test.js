import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../pages/Loading';

describe('<Loading />', () => {
    const tree = renderer.create(<Loading />).toJSON();
    it('has 2 children', () => {
        expect(tree.children.length).toBe(2);
    });
    it('has 1 of type Text', () => {
        expect(tree.children.filter(child => child.type === 'Text').length).toBe(1);
    });
});