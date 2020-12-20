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

const DifferentialsInputPage = () => {
  const [form, onChangeInput] = useForm({
    description: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/');
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Conte um ou mais diferenciais que"
            span="você"
            continueContent="pode oferecer para as empresas"
            hasParagraph
          />
        </MainContainer>
        <Form>
          <Input
            onChange={handleInputChange}
            type="text"
            name="description"
            value={form.description}
          />
        </Form>

        <Footer tosubmit={handleSubmit} />
      </PagesContainer>
    </>
  );
};
export default DifferentialsInputPage;
