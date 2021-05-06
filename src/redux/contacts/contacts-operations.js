import axios from "axios";
import action from "./contacts-actions";

const getContacts = () => (dispatch) => {
  dispatch(action.getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      return dispatch(action.getContactsSuccess(data));
    })
    .catch((error) => dispatch(action.getContactsError(error.message)));
};

const addContacts = (item) => (dispatch) => {
  dispatch(action.addContactsRequest());
  axios
    .post("/contacts", item)
    .then((response) => response.data)
    .then((data) => dispatch(action.addContactsSuccess(data)))
    .catch((error) => dispatch(action.addContactsError(error.message)));
};

const deleteContacts = (id) => (dispatch) => {
  dispatch(action.deleteContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(action.deleteContactsSuccess(id)))
    .catch((error) => dispatch(action.deleteContactsError(error.message)));
};

export default {
  getContacts,
  addContacts,
  deleteContacts,
};
