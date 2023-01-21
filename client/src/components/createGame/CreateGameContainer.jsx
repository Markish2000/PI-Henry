import React from 'react';
import CreateGameForm from './CreateGameForm';

// TODO: Cuando el usuario vaya creando el video game aparecerá una visualización de como quedaría.
// ?? ¿Debería ir guardando en un estado local y hacer que se renderice la app cada vez que hay un cambio en el estado?

const CreateGameContainer = () => {
  return (
    <div>
      <CreateGameForm />
    </div>
  );
};
export default CreateGameContainer;
