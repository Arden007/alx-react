import React from 'react';
import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Test CourseListRow component', () => {
    it('Test rendering when isHeader true', () => {
        const list = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(list.find("th")).toHaveLength(1);
        expect(list.find("th").prop("colSpan")).toEqual("2");
        expect(list.find("th").text()).toEqual("test");
    })
    it("should render 2 cell when both text cells are defined", () => {
        const list = shallow(<CourseListRow isHeader={true} textFirstCell="test 1" textSecondCell="test 2" />)
        expect(list.find('th')).toHaveLength(2)
        expect(list.find("tr").at(0).text()).toEqual('test 1');
        expect(list.find("tr").at(1).text()).toEqual('test 2');
    })
    it('should render 2 td element when isHead = false', () => {
        const list = shallow(<CourseListRow isHeader={true} textFirstCell="test 1" textSecondCell="test 2" />)
        expect(list.find('td')).toHaveLength(2)
        expect(list.find("tr").at(0).text()).toEqual("test 1");
        expect(list.find("tr").at(1).text()).toEqual("test 2 ");
    })
})