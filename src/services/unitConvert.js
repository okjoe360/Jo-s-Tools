import * as converter from 'units-converter-ts';

export default class UnitConverter{
    measuresList(){
        return converter.convert.measures();
    }

    measuresDescList(){
        return converter.convert.list();
    }

    convPossibilities(unit){
        return converter.convert.possibilities(unit);
    }

    convPossibilities(unit){
        let descList = this.measuresDescList().filter((desc) => desc.measure === unit)
        return descList
    }

    convertUnit(fromUnit, toUnit, inputValue){
        return converter.convert.convert(fromUnit, toUnit, inputValue);
    }
}