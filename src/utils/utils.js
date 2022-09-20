//объявление переменных
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');
const popupEditAvatar = '#editAvatarPopup';
const formElementAvatarEdit = document.querySelector('#editAvatarPopup').querySelector('.popup__form');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupProfileEdit = '#editPopup';
const formElementEdit = document.querySelector('#editPopup').querySelector('.popup__form');
const popupCardAdd = '#addPopup';
const formElementAdd = document.querySelector('#addPopup').querySelector('.popup__form');
const popupFullSizeImage = '#imagePopup';
const popupDeleteCard = '#deletePopup';
const nameInput = document.querySelector('.profile-name');
const jobInput = document.querySelector('.profile-job');
const cardListSelector = '.cards__list';
const cardAddButton = document.querySelector('.profile__add-button');
const cardTemplate = '.card-template';
const components = {
  like: '.card__like-button',
  delete: '.card__delete-button',
  cardImage: '.card__img',
  title: '.card__title',
  likeCounter: '.card__like-counter'
};
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_is_invalid',
  errorClass: 'popup__input-error_active'
};
const profileInfo = {
  name: '.profile__name',
  about: '.profile__job',
  avatar: '.profile__avatar-image'
};

export {
    avatarEditButton,
    popupEditAvatar,
    formElementAvatarEdit,
    buttonEdit,
    popupProfileEdit,
    formElementEdit,
    popupCardAdd,
    formElementAdd,
    popupFullSizeImage,
    popupDeleteCard,
    nameInput,
    jobInput,
    cardListSelector,
    cardAddButton,
    validationSettings,
    components,
    cardTemplate,
    profileInfo
};