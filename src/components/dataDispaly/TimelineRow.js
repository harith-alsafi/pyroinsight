import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function TimelineRow(props) {
	const { logo, title, date, color, index, arrLength } = props;
	const textColor = useColorModeValue('gray.700', 'white.300');
	const bgIconColor = useColorModeValue('white.300', 'gray.700');
	const textColorDate = useColorModeValue("secondaryGray.600", "white");
	const textColor2 = useColorModeValue("secondaryGray.900", "white");

	return (
		<Flex alignItems='center' minH='78px' justifyContent='start' mb='5px'>
			<Flex direction='column' h='100%'>
				<Icon
					as={logo}
					bg={bgIconColor}
					color={color}
					h={'30px'}
					w={'40px'}
					pe='6px'
					zIndex='1'
					position='relative'
					right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
					left={document.documentElement.dir === 'rtl' ? '' : '-8px'}
				/>
				<Box w='2px' bg='gray.200' position='relative' left='8px' h={index === arrLength - 1 ? '15px' : '100%'} />
			</Flex>
			<Flex direction='column' justifyContent='flex-start' h='100%'>
				<Text fontSize='18px' color={textColor2} fontWeight='bold'>
					{title}
				</Text>
				<Text fontSize='16px' color={textColorDate} fontWeight='normal'>
					{date}  
				</Text>
			</Flex>
		</Flex>
	);
}
