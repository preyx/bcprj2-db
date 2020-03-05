const updateItem = ({ id, dataset: { isDone } }) => {
  // axios PUT request, grabbing the id off the <li> tag for the item, as well as setting isDone to be the opposite value of the data-isDone property on the <li>
  axios.put(`/api/teams/${id}`, { isDone: !parseInt(isDone) })
    // once finished, a GET request for the user and all their items is run
    .then(() => axios.get(`/api/users/${uname}`))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}

const deleteItem = ({ dataset: { id } }) => {
  // axios DELETE request, which takes the data-id property off of the x badge on the <li> to identify the item to be deleted
  axios.delete(`/api/teams/${id}`)
    // once finished, a GET request for the user and all their items is run
    .then(() => axios.get(`/api/users/${uname}`))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}