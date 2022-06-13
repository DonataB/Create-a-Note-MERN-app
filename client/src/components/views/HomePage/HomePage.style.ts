import styled from "styled-components";
import LandingPageBackground from "../../../assets/LandingPagePhoto.jpg";

export const HomePageWrapper = styled.div`
	background-image: url(${LandingPageBackground});
	background-size: cover;
	background-position: 100% 0;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 90vh;
	@media (max-width: 952px) {
		background-position: 80% 0;
	}
	@media (max-width: 576px) {
	} ;
`;

export const Card = styled.div`
	margin-top: 40px;
	width: 50%;
	height: 80%;
	background-color: ${({ theme }) => theme.colors.card.primary};
	border-radius: ${({ theme }) => theme.size.common.borderRadius};
	color: ${({ theme }) => theme.colors.common.textColor};
	font-weight: ${({ theme }) => theme.weight.bold};
	padding: 15px;
	mix-blend-mode: multiply;

	@media (max-width: 576px) {
		width: 95%;
	} ;
`;

export const Title = styled.div`
	font-size: ${({ theme }) => theme.size.desktop.xxxl};
	text-align: center;

	@media (max-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.xxl};
	} ;
`;

export const Text = styled.div`
	margin-top: 1rem;
	font-size: ${({ theme }) => theme.size.desktop.lg};

	@media (max-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.mdl};
	} ;
`;
