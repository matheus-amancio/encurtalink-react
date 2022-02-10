// Buscar os links salvos
export async function getSavedLinks(key) {
    const myLinks = await localStorage.getItem(key)

    let savedLinks = JSON.parse(myLinks) || []

    return savedLinks
}

// Salvar um link no localStorage
export async function saveLink(key, newLink) {
    let storedLinks = await getSavedLinks(key)

    const hasLink = storedLinks.some(link => link.id === newLink.id)

    if (hasLink) {
        console.log('Esse link já existe em sua lista.')
        return;
    }

    storedLinks.push(newLink)
    await localStorage.setItem(key, JSON.stringify(storedLinks))
    console.log('Link salvo com sucesso!')
}

// Deleta algum link salvo
export function deleteLink(links, id) {
    let myLinks = links.filter(item => (
        item.id !== id
    ))

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso.')

    return myLinks
}
