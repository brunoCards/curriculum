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

const DescriptionInputPage = () => {
  const [form, onChangeInput] = useForm({
    description: '',
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeInput(name, value);
  };

  const handleSubmit = () => {
    history.push('/diferenciais');
  };

  return (
    <>
      <Header />
      <PagesContainer>
        <MainContainer>
          <Text
            content="Faça uma breve descrição sobre"
            span="você, e o"
            isgreen="seu"
            continueContent="momento atual. E o que"
            ispurple="você"
            afterEmphasys="espera de uma empresa?"
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
export default DescriptionInputPage;
