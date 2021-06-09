

export const slugify = (phrase) => {

    const space = / /g

    return phrase.replace(space, '-').toLowerCase()
}


export const sortByDate = (a, b) => {

    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)

}


