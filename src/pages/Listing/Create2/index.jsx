import Icon from "components/Icon";
import React from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import media from "utils/media";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "components/Forms/FormikControl";

const Container = styled.div`
  background-color: #f0efed;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Element = styled.div`
  padding: 20px 12px;
  position: relative;
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Header = styled.h1`
  font-family: Roboto Slab, "serif";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 25px;
  text-align: center;
`;

const ContainerBox = styled.div`
  border-radius: 3px;
`;
const StackedBox = styled.div`
  padding: 10px;
  border: none;
  box-shadow: 0 1px 4px 0rgba (0, 0, 0, 0.14);
  background-color: #fff;
  margin-bottom: 1px;
`;

const CardHeader = styled.div`
  padding-left: 0;
  margin-bottom: 5px;
  ${media.sm(css`
    padding-left: 12px;
    margin: 15px 0;
  `)};
`;

const CardBody = styled.div`
  height: auto;
  position: relative;
  border: none;
  padding-left: 0;
  ${media.sm(css`
    padding: 10px 12px;
  `)};
`;

const BreadCrumb = styled.div`
  width: 60%;
  /* float: left; */
  overflow: hidden;
`;

const Wijzigen = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  min-height: 40px;
  padding: 11px 24px;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  clear: both;
  display: block;
  float: none !important;
  padding: 12px 24px 12px 5px;
  text-align: left;
  min-height: 35px;
  font-family: Roboto, sans-serif;
  font-family: var(--mp-font-base, "Roboto", sans-serif);
  font-style: normal;
  font-weight: 400;
  background: transparent;
  color: #116db4;
  font-size: 16px;
  line-height: 16px;
  ${media.sm(css`
    padding: 12px 24px 12px 5px;
    float: right;
    width: 120px;
  `)};

  :hover {
    background: #f7f7f6;
    color: #1589e3;
  }
`;

const BreadCrumbItem = styled.span`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  font-size: 16px;

  position: relative;

  :not(:first-child) {
    margin-left: 24px;
    ::after {
      background: url(/img/icons/Sprite.svg) no-repeat;
      background-size: auto 100%;
      background-position: 7.228915662650603% 0;
      content: "";
      display: block;
      height: 100%;
      left: -24px;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 24px;
    }
  }
`;

const CreateListing = () => {
  let { cat } = useParams();
  const { user } = useSelector((state) => ({ ...state }));

  const countryOptions = [
    { key: "Nederland", value: "nederland" },
    { key: "Buitenland", value: "buitenland" },
  ];

  const pricetypeOptions = [
    { key: "select an option", value: "" },
    { key: "vraagprijs", value: "vraagprijs" },
    { key: "bieden", value: "bieden" },
    { key: "op aanvraag", value: "op aanvraag" },
  ];

  const deliveryOptions = [
    { key: "ophalen", value: "ophalen" },
    { key: "verzenden", value: "verzenden" },
    { key: "ophalen of verzenden", value: "ophalen of verzenden" },
  ];
  const initialValues = {
    category: cat,
    photos: [],
    title: "",
    description: "",
    pricetype: "",
    delivery: "",
    phone: "",
    country: "nederland",
    postcode: "",
  };
  const validationSchema = Yup.object({
    // photos: Yup.array().required("required"),
    title: Yup.string().required("required"),
    description: Yup.string().required("required"),
    pricetype: Yup.string().required("required"),
    delivery: Yup.string().required("required"),
    country: Yup.string().required("required"),
    postcode: Yup.string().required("required"),
  });

  const appendFormData = (form, key, val) => {
    return new Promise((resolve) => {
      let newForm = form.append(key, val);
      resolve(newForm);
    });
  };

  const onSubmit = async (values) => {
    try {
      alert(JSON.stringify(values));
      // let form = new FormData();
      // console.log(form);
      // form.append("data", JSON.stringify({ ...values, images: null }));

      // for (const photo of values.photos) {
      //   await appendFormData(form, "images", photo);
      //   console.log(form);
      // }
      // const response = await axios({
      //   method: "post",
      //   url: `${process.env.REACT_APP_BACKEND_URL}/listing/create`,
      //   data: form,
      //   headers: {
      //     Authorization: `Bearer ${user.user.token}`,
      //     "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      //   },
      // });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Container>
              <Content>
                <Element>
                  <Header>Plaats advertentie</Header>
                  <ContainerBox>
                    <StackedBox>
                      <CardHeader>
                        <h2>Gekozen categorie</h2>
                      </CardHeader>
                      <BreadCrumb>
                        <BreadCrumbItem>item1</BreadCrumbItem>
                        <BreadCrumbItem>item2</BreadCrumbItem>
                        <BreadCrumbItem>item3</BreadCrumbItem>
                      </BreadCrumb>
                      <Wijzigen>
                        <Icon
                          name={"edit"}
                          weight="100"
                          size={"24px"}
                          color={"black"}
                        />
                        wijzigen
                      </Wijzigen>
                    </StackedBox>

                    <StackedBox>
                      <CardHeader>
                        <h2>Foto's</h2>
                      </CardHeader>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        multiple
                        onChange={(event) => {
                          console.log(formik);
                          formik.setFieldValue(
                            "photos",
                            event.currentTarget.files[0]
                          );
                        }}
                        className="form-control"
                      />
                    </StackedBox>
                    <StackedBox>
                      <CardHeader>
                        <h2>Details</h2>
                      </CardHeader>
                      <FormikControl
                        control="input"
                        type="text"
                        label="Title"
                        name="title"
                      />
                      <FormikControl control="quill" name="description" />
                    </StackedBox>

                    <StackedBox>
                      <CardHeader>
                        <h2>Prijs</h2>
                      </CardHeader>
                      <FormikControl
                        control="select"
                        options={pricetypeOptions}
                        label="Prijstype"
                        name="pricetype"
                      />
                    </StackedBox>

                    <StackedBox>
                      <CardHeader>
                        <h2>Levering</h2>
                      </CardHeader>

                      <FormikControl
                        control="select"
                        options={deliveryOptions}
                        label="delivery"
                        name="delivery"
                      />
                    </StackedBox>
                    <StackedBox>
                      <CardHeader>
                        <h2>Contactgegevens</h2>
                      </CardHeader>
                      <FormikControl
                        control="input"
                        type="text"
                        label="Telefoonnummer"
                        name="phone"
                      />
                      <FormikControl
                        control="input"
                        type="text"
                        label="Postcode"
                        name="postcode"
                      />
                      <FormikControl
                        control="radio"
                        options={countryOptions}
                        label="radio options"
                        name="country"
                      />
                    </StackedBox>
                    <StackedBox>
                      <button type="submit">Submit</button>
                    </StackedBox>
                  </ContainerBox>
                </Element>
              </Content>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateListing;
