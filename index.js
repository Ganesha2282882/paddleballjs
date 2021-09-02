var React = {
    createElement: (tag, attrs, ...children) => {
        var elem = document.createElement(tag);
        try {
            Object.keys(attrs).forEach(key => elem.setAttribute(key, attrs[key]));
        } catch (error) {
            undefined;
        }
        children.forEach(child => elem.append(child));
        document.querySelector("body").append(elem);
        return elem;
    }
}