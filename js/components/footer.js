export {
    createFooter
}

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add('footer');
    footer.innerHTML = '<small class="footer__copyright">TACOES FOR YOU INC &copy;2020</small>'
    return footer;
}