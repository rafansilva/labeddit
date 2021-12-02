import React from "react"
import {Button, Typography} from "@material-ui/core";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ElementLogin, ImageSidebar, LoginContainer, MainContainer} from "../LoginPage/styled";
import SignUpForm from "./SignUpForm";
import {goToLogin} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";
import hello from "../../assets/Hello.svg";

const SignUpPage = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (
        <MainContainer>
            <LoginContainer>
                <ElementLogin>
                    <Typography variant={"h4"}>
                        Criar Conta:
                    </Typography>

                    <SignUpForm/>

                    <Button
                        onClick={() => goToLogin(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >Já Possui conta? Faça Login</Button>
                </ElementLogin>

                <ImageSidebar src={hello}/>

            </LoginContainer>
        </MainContainer>

    )
}

export default SignUpPage