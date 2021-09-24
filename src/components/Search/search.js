import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import "./Search.css"
import { Icon } from 'semantic-ui-react';

const SearchSchema = Yup.object().shape({
  search: Yup.string().required("Este campo es obligatorio")
  
});

const SearchComponent = () => {
  const history = useHistory();
  const formik = useFormik({  
    initialValues: {
      search: "",
   
    },
    validationSchema: SearchSchema,
    onSubmit: (value, { resetForm }) => {
      history.push(`/search/${value.search}`);     
      resetForm();
    },
   
  });
  
  return (
    <form className="input-search" onSubmit={formik.handleSubmit}>
    <div>
      <input
        type="text"
        name="search"
        className="input-style"
        placeholder="Search Hero"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
      <button type="submit" className="btn-search" style={{float: "center"}}>
      <Icon name="search"/>
      </button>
      </div>
      
    </form>
  );
};

export default SearchComponent;
