import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

export default function StepperSample() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['ステップ1', 'ステップ2', 'ステップ3'];
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>最後まで完了しました</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setActiveStep(0);
              }}
            >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(activeStep + 1)}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
