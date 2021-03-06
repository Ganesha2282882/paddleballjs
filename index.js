var React = {
    createElement: (tag, attrs, ...children) => {
        if (eval(`typeof ${tag} === "function"`)) {
            console.log(tag);
            return eval(`(${tag}(attrs))`);
        }
        var elem = document.createElement(tag);
        try {
            Object.keys(attrs).forEach(key => elem.setAttribute(key, attrs[key]));
        } catch (error) {
            undefined;
        }
        children.forEach(child => elem.append(child));
        return elem;
    }
}

var ReactDOM = {
    render: (component, element) => {
        element.append(component);
    }       
}

var Paddleball = Object.assign({}, React);
var PbDOM = Object.assign({}, ReactDOM);