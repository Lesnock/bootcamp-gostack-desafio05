import styled from 'styled-components'

export const Container = styled.div`
    background: #F2F3F3;
    border-radius: 4px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, .3);
    padding: 30px;
    margin: 80px auto;
    max-width: 700px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;

    a.back {
        position: absolute;
        text-decoration: none;
        font-size: 10pt;
        color: #FFF;
        left: 0px;
        top: -25px;

        svg {
            margin-right: 5px;
        }
    }
`

export const Owner = styled.div`
    display: flex;
    flex-direction: row;

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        align-self: center;
    }

    div {
        margin-left: 30px;

        p {
            color: #888;
            margin-top: 10px;
        }
    }
`

export const SelectState = styled.select`
    padding: 7px;
    margin-top: 20px;
    border-radius: 4px;
    font-size: 8pt;
`

export const List = styled.ul`
    padding-top: 30px;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    list-style: none;

    li {
        display: flex;
        flex-direction: row;
        padding: 15px 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        background: #FFF;

        & + li {
            margin-top: 15px;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
        }

        div {
            flex: 1;
            margin-left: 15px;

            a {
                text-decoration: none;
                font-size: 12pt;
                color: #333;

                &:hover {
                    color: #366ed8;
                }
            }

            span {
                background: #ccc;
                color: #333;
                margin-left: 5px;
                padding: 3px 5px;
                border-radius: 2px;
                font-size: 8pt;
            }

            p {
                font-size: 10pt;
                color: #888;
            }
        }
    }
`

export const PageButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        background: #FFF;
        padding: 7px;
        font-size: 8pt;
        border: 1px solid #888;
        border-radius: 5px;
        cursor: pointer;
    }
`
