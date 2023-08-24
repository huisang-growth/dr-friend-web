import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

export const phone = () => {
	return <Div>hello, world</Div>;
};

export default phone;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: black;
`;