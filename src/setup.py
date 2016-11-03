from setuptools import setup

setup(name='iml',
      version='0.2',
      description='Interpretable Machine Learning (iML) package. Explain the predictions of any model.',
      url='http://github.com/interpretable-ml/iml',
      author='Scott Lundberg',
      author_email='slund1@cs.washington.edu',
      license='MIT',
      packages=['iml', 'iml.explainers'],
      package_dir={'iml': 'python'},
      install_requires=['numpy', 'scipy'],
      test_suite='nose.collector',
      tests_require=['nose'],
      zip_safe=False)
