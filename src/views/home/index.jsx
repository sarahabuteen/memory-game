import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGameSettings } from '../../redux/actions/settings.actions';
import Header from './header';
import Options from './options';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameSettings());
  }, []);
  return (
    <main className="dark-bg h-100 d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Options />
    </main>
  );
}

export default Home;
