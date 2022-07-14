import styled from "styled-components";
import LandingPageBackground from "../../../assets/LandingPagePhoto.jpg";

export const HomePageWrapper = styled.div`
	background-image: url(${LandingPageBackground});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Card = styled.div`
	margin-top: 40px;
	max-width: 70vw;
	max-height: 50vh;
	background-color: ${({ theme }) => theme.colors.card.primary};
	border-radius: ${({ theme }) => theme.size.common.borderRadius};
	color: ${({ theme }) => theme.colors.common.textColor};
	font-weight: ${({ theme }) => theme.weight.bold};
	padding: 15px;
`;


export const Title = styled.div`
	font-size: ${({ theme }) => theme.size.desktop.xl};
	text-align: center;

	@media (max-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.xxl};
	} ;
`;

export const Text = styled.div`
	margin-top: 1rem;
	font-size: ${({ theme }) => theme.size.desktop.sm};

	@media (max-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.md};
	} ;
`;
