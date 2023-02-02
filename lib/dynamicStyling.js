// This function is used for elements selected states dynamic styling.
// Code copied from Tailwind CSS.
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default classNames;