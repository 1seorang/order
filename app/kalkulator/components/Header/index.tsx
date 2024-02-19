import styled from "styled-components"
import { AudioSettings } from "../AudioSettings"

export function Header() {

    return <>
        <Container className="w-full">
            <AudioSettings />
        </Container>
    </>
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`