import { Formik ,Form,Field} from 'formik';
export default function SearchBar({ onSearch, catchError }) {
    
    const handleSubmit = (values) => {
        if (values.searchQuery.trim() == "") {
            catchError()
            console.log("error")
        } else {
        onSearch(values.searchQuery)
        }
    };

    return <header>
        <Formik
            onSubmit={handleSubmit}
            initialValues={{ searchQuery: "" }}
        >
            <Form>
                <Field
                    name="searchQuery"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                ></Field>
                <button type="submit">Search</button>
            </Form>
        </Formik>
    </header>;

}