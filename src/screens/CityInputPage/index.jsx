import React from 'react';

//xcustom-hook
import useForm from '../../hooks/useForm';

//imports react-router-dom
import { useHistory } from 'react-router-dom';

//components
import Header from '../../components/Header';
import Text from '../../components/Text';
import Footer from '../../components/Footer';

//global-styled-components
import { PagesContainer } from '../../styles/Components/PagesContainer/styles';
import { Form } from '../../styles/Components/Form/styles';
import { Input } from '../../styles/Components/Input/styles';

//styled-components
import { MainContainer } from './styles';

const CityInputPage = () => {
  const [form, onChangeInput] = useForm({
    city: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/estado');
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Qual a cidade que"
            span="você"
            continueContent="mora?"
          />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="city"
            value={form.city}
          />
        </Form>

        <Footer tosubmit={handleSubmit} />
      </PagesContainer>
    </>
  );
};
export default CityInputPage;
