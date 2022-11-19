import React from "react";
import Input from "./Input";


export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='small size'></Input>
export const Medium = () => <Input size='medium' placeholder='medium size'></Input>

export const Large = () => <Input size='large' placeholder='large size'></Input>