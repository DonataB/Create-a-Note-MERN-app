import styled from 'styled-components';
import LandingPageBackground from '../../../assets/LandingPagePhoto.jpg';

export const HomePageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${LandingPageBackground});
	background-size: cover;
	background-position: center;
	height: 100vh;
`;

export const Card = styled.div`
	margin-top: 40px;
	padding: 15px;
	max-width: 70vw;
	max-height: 50vh;
	background-color: ${({ theme }) => theme.colors.card.primary};
	border-radius: ${({ theme }) => theme.size.common.borderRadius};
	color: ${({ theme }) => theme.colors.common.textColor};
	font-weight: ${({ theme }) => theme.weight.bold};
`;

export const Title = styled.div`
	text-align: center;

	@media (min-width: 320px) {
		font-size: ${({ theme }) => theme.size.mobile.md};
	} ;

	@media (min-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.xxl};
	} ;

	@media (min-width: 992px) {
		font-size: ${({ theme }) => theme.size.desktop.xl};
	} ;
`;

export const Text = styled.div`
	margin-top: 1rem;

	@media (min-width: 320px) {
		font-size: ${({ theme }) => theme.size.mobile.md};
	} ;

	@media (min-width: 576px) {
		font-size: ${({ theme }) => theme.size.mobile.md};
	} ;

	@media (min-width: 992px) {
		font-size: ${({ theme }) => theme.size.desktop.sm};
	} ;
`;
