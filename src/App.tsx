import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '@/layouts';
import { CharacterPage, HomePage } from '@/pages';

export const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/characters/:id'
            element={<CharacterPage />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
