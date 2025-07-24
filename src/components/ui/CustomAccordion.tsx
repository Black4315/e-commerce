import { Accordion, AccordionSummary, AccordionDetails, Typography, AccordionProps } from '@mui/material';
import { ReactNode } from 'react';
import DropDownIcon from '@/assets/icons/DropDown'; 

type CustomAccordionProps = {
    title: string;
    children: ReactNode;
} & Omit<AccordionProps, 'children'>;

const CustomAccordion = ({
    title,
    children,
    ...props
}: CustomAccordionProps) => {
    return (
        <Accordion
            TransitionProps={{ timeout: 200 }}
            disableGutters
            square
            {...props}
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderBottom: '1px solid #333',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                '& .MuiAccordionSummary-root': {
                    padding: '0.75rem 0',
                    minHeight: 0,
                },
                '& .MuiAccordionSummary-content': {
                    margin: 0,
                },
                '& .MuiTypography-root': {
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#f5f5f5',
                },
                '& .MuiAccordionDetails-root': {
                    paddingLeft: 0,
                    paddingTop: '0.5rem',
                    paddingBottom: '0.75rem',
                    color: '#ccc',
                    fontSize: '0.95rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                },
                '& .MuiSvgIcon-root': {
                    color: '#f5f5f5',
                },
                ...props.sx, // Allow extending styles externally
            }}
        >
            <AccordionSummary
                expandIcon={<DropDownIcon className="text-text-1" />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default CustomAccordion;
